function validationInputPhrase(phrase, secretKey) {
  const isValid = phrase.toLowercase().match(secretKey);
  const isEmpty = phrase === "";

  if (isEmpty) return { message: "You need to type a secret KEY!" };
  if (!isValid) return { message: "Wrong! Please, type a secret KEY again." };

  return;
}

const utilities = {
  validationInputPhrase,
};

export default utilities;
