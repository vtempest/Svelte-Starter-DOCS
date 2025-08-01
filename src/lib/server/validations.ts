import { z } from "zod";

/**
 * Validations module uses the Zod library to define 
 * and validate different types of user inputs.
 * @see Zod [Zod Docs](https://zod.dev/?id=basic-usage)
 * @see flash-messages [sveltekit-flash-messages](https://github.com/ciscoheat/sveltekit-flash-messages#how-to-use)
 */

export const USERNAME_MIN_LEN = 3;
export const USERNAME_MAX_LEN = 20;

export const PASSWORD_MIN_LEN = 6;
export const PASSWORD_MAX_LEN = 50;

export const NAME_MIN_LEN = 3;
export const NAME_MAX_LEN = 50;

export const USER_ID_LEN = 15; // characters

export const SESSION_ID_LEN = 40; // characters

export const TOKEN_LEN = 15; // characters
export const TOKEN_EXPIRATION_TIME = 30; // minutes

// Core Field Validations
export const isAdminField = z.boolean().default(false);

export const isVerifiedField = z.boolean().default(false);

export const nameField = z
  .string({ required_error: "Name is required" })
  .trim()
  .min(NAME_MIN_LEN, {
    message: `Name must be at least ${NAME_MIN_LEN} characters`,
  })
  .max(NAME_MAX_LEN, {
    message: `Name must be at least ${NAME_MAX_LEN} characters`,
  });

export const passwordConfirmField = z.string({
  required_error: "Password confirm is required",
});

type EqualPasswords = { password: string; passwordConfirm: string };

export const passwordConfirmMustBeEqualToPassword = (
  { password, passwordConfirm }: EqualPasswords,
  ctx: z.RefinementCtx
) => {
  if (passwordConfirm.length > 0 && password !== passwordConfirm) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Password and password confirm must match",
      path: ["password"],
    });
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Password and password confirm must match",
      path: ["passwordConfirm"],
    });
  }
};

const passwordRegex = new RegExp(
  `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,\\-./:;<=>?[\\]^_\`{|}~])[A-Za-z0-9!@#$%^&*"'()+,\\-./:;<=>?[\\]^_\`{|}~]{${PASSWORD_MIN_LEN},${PASSWORD_MAX_LEN}}$`
);

export const passwordField = z
  .string({ required_error: "Password is required" })
  .regex(passwordRegex, { message: "Password is invalid." })
  .min(PASSWORD_MIN_LEN, {
    message: `Password minimum length is ${PASSWORD_MIN_LEN}`,
  })
  .max(PASSWORD_MAX_LEN, {
    message: `Password max length is ${PASSWORD_MAX_LEN}`,
  });

export const tokenField = z
  .string({ required_error: "Token is required." })
  .trim()
  .length(TOKEN_LEN, { message: `Token must be ${TOKEN_LEN} characters` });

export const userIdField = z
  .string({ required_error: "UserId is required" })
  .trim()
  .length(USER_ID_LEN, {
    message: `User id must be ${USER_ID_LEN} characters`,
  });

export const usernameField = z
  .string({ required_error: "Username is valid." })
  .trim()
  .min(USERNAME_MIN_LEN, {
    message: `Username must be at least ${USERNAME_MIN_LEN} characters`,
  })
  .max(USERNAME_MAX_LEN, {
    message: `Username must be max ${USERNAME_MAX_LEN} characters`,
  });

// Settings Schemas
export const settingsAccountFormSchema = z.object({
  name: nameField,
});

export const settingsNotificationsFormSchema = z.object({
  name: nameField,
});

export const settingsProfileFormSchema = z.object({
  username: usernameField,
});

// Parameter Schemas
export const tokenSchema = z.object({
  token: tokenField,
});

export const userIdSchema = z.object({
  userId: userIdField,
});

// Update User Schema
export const updateUserFormSchema = z.object({
  name: nameField,
});
