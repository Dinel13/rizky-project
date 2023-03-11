export async function IsEligible(db, userId, type) {
  if (type === "UKOM-perawat-gratis") {
    return true;
  }
  const [eligible] = await db
    .promise()
    .query(
      `SELECT is_eligible FROM eligible WHERE user_id = ? AND tryout = ?`,
      [userId, type]
    );

  if (!eligible || !eligible[0]?.is_eligible) {
    return false;
  }

  return eligible[0]?.is_eligible === 1;
}

export async function RemoveEligible(db, userId, type) {
  const [userData] = await db
    .promise()
    .query(
      `UPDATE eligible SET is_eligible = ? WHERE user_id = ? AND tryout = ?`,
      [0, parseInt(userId), type]
    );

  return userData.affectedRows;
}

export async function SetEligibleAndRemoveToken(db, userId, type, token) {
  const [eligible] = await db
    .promise()
    .query(
      `SELECT id, is_eligible FROM eligible WHERE user_id = ? AND tryout = ?`,
      [userId, type]
    );

  // jika sudah pernah eliguble maka update datanya
  // else insert new eilgible user
  if (eligible[0]?.id) {
    if (eligible[0]?.is_eligible == 0) {
      const [update] = await db
        .promise()
        .query(
          `UPDATE eligible SET is_eligible = ? WHERE user_id = ? AND tryout = ?`,
          [1, parseInt(userId), type]
        );
      if (update.affectedRows == 0) {
        return false;
      }
    } else {
      console.log("already eligible");
      return true;
    }
  } else {
    const [data] = await db
      .promise()
      .query(
        `INSERT INTO eligible(is_eligible, user_id, tryout) VALUES (?,?,?)`,
        [1, userId, type]
      );

    if (!data?.insertId) {
      console.log("fail insert new eligible");
      return false;
    }
  }

  // set token already used
  const [updateToken] = await db
    .promise()
    .query(`UPDATE token_tryout SET userId = ? WHERE token = ?`, [
      parseInt(userId),
      token,
    ]);

  if (updateToken.affectedRows == 0) {
    return false;
  }

  return true;
}
