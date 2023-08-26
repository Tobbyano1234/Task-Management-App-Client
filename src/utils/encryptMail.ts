export const encryptMail = (email: string): string => {
  const emailParts = email.split("@");
  const username = emailParts[0];
  const domain = emailParts[1];

  if (username.length <= 2) {
    return email;
  }

  const hiddenUsername = username.slice(0, 3) + "*".repeat(28 - 3 - domain.length) + username.slice(-2);
  return `${hiddenUsername}@${domain}`;
};







