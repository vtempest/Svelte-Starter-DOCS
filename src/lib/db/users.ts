import { eq } from "drizzle-orm";
import { users } from "./schema";

/**
 * Creates a new user
 * @param {Object} db
 * @param {Object} newUser
 * @returns {Promise<Object>}
 */
export async function createUser(db, newUser) {
  newUser = {
    ...newUser,
    email: newUser.email.toLowerCase(),
    username: newUser.username.toLowerCase(),
  };

  const res = await db
    .insert(users)
    .values(newUser)
    .onConflictDoNothing()
    .returning();

  if (res.length === 0) return;

  return res[0];
}

/**
 * Gets all users
 * @param {Object} db
 * @returns {Promise<[]>}
 */
export async function getAllUsers(db) {
  return await db.query.users.findMany();
}

/**
 * Gets a user by email
 * @param {Object} db
 * @param {string} email
 * @returns {Promise<Object>}
 */
export async function getUserByEmail(db, email) {
  if (!email) return;

  return await db.query.users.findFirst({ where: eq(users.email, email) });
}

/**
 * Gets a user by id
 * @param {Object} db
 * @param {string} id
 * @returns {Promise<Object>}
 */
export async function getUserById(db, id) {
  if (!id) return;

  return await db.query.users.findFirst({ where: eq(users.id, id) });
}

/**
 * Gets a user by username
 * @param {Object} db
 * @param {string} username
 * @returns {Promise<Object>}
 */
export async function getUserByUsername(db, username) {
  if (!username) return;

  return await db.query.users.findFirst({
    where: eq(users.username, username),
  });
}

/**
 * Updates a user by id
 * @param {Object} db
 * @param {string} id
 * @param {Object} userData
 * @returns {Promise<Object>}
 */
export async function updateUserById(db, id, userData) {
  if (!id) return;

  const res = await db
    .update(users)
    .set(userData)
    .where(eq(users.id, id))
    .returning();

  if (res.length === 0) return;

  return res[0];
}

/**
 * Deletes a user by id
 * @param {Object} db
 * @param {string} id
 * @returns {Promise<Object>}
 */
export async function deleteUserById(db, id) {
  if (!id) return;

  const res = await db.delete(users).where(eq(users.id, id)).returning();

  if (res.length === 0) return;

  return res[0];
}

/**
 * Generates a random API key
 * @param {number} [length=64] The length of the API key
 * @returns {string} The API key
 */
export function createAPIKey(length = 64) {
  const ranges = [
    [65, 90], // Uppercase
    [97, 122], // Lowercase
    [48, 57], // Digits
  ];
  var result = "";
  for (let i = 0; i < length; i++) {
    const range = ranges[Math.floor(Math.random() * ranges.length)];
    result += String.fromCharCode(
      Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]
    );
  }
  return result;
}
