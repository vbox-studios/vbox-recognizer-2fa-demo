const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function generateId() {
  let result = "";
  let charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
