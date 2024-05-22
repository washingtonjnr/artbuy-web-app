export function validatePassword(password: string): boolean {
  const hasUpperLetter = /[A-Z]/.test(password);
  const hasLowerLetter = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return hasUpperLetter && hasLowerLetter && hasNumber && hasSpecialCharacter
}

export function validateFullName(name: string): boolean {
  return name.trim().includes(" ");
}

export function validateCPF(cpf: string): boolean {
  // Remove non-numeric characters
  cpf = cpf.replace(/[^\d]/g, "");

  // Check if the CPF has 11 digits
  if (cpf.length !== 11) return false;

  // Check if all digits are the same (invalid case)
  if (/^(\d)\1+$/.test(cpf)) return false;

  // Validate check digits
  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}
