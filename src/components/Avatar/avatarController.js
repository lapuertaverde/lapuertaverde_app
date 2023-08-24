/**This functions validates the value of the src string as a url image, if the string isn't a image match returns null */

export const validate = (string) =>
  string.match(/^.*\.(jpg|JPG|gif|GIF|svg|SVG|png|PNG|tiff|TIFF)$/) ||
  string.match(/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/)

/**This function returns the first letters of the two first words of the string */

export const capLetters = (string) =>
  string
    .replaceAll(/[^\\dA-Za-z]/g, ' ')
    .trim()
    .split(' ')
    .filter((element, i) => i <= 1)
    .map((element) => element[0])
    .join('')
    .toUpperCase()

/* Return a color and bgColor for the string avatar */

export const coloringText = (string) => {
  var colors = [
    { letter: 'A', backgroundColor: '#B71C1C', color: '#fff' },
    { letter: 'B', backgroundColor: '#F48FB1', color: '#1A2832' },
    { letter: 'C', backgroundColor: '#00A1C1', color: '#fff' },
    { letter: 'D', backgroundColor: '#A5D6A7', color: '#1A2832' },
    { letter: 'E', backgroundColor: '#2D479C', color: '#fff' },
    { letter: 'F', backgroundColor: '#FFDA81', color: '#1A2832' },
    { letter: 'G', backgroundColor: '#388E3C', color: '#fff' },
    { letter: 'H', backgroundColor: '#D1C4E9', color: '#1A2832' },
    { letter: 'I', backgroundColor: '#004D40', color: '#fff' },
    { letter: 'J', backgroundColor: '#BCAAA4', color: '#1A2832' },
    { letter: 'K', backgroundColor: '#1E88E5', color: '#fff' },
    { letter: 'L', backgroundColor: '#C1E87F', color: '#1A2832' },
    { letter: 'M', backgroundColor: '#DE9910', color: '#fff' },
    { letter: 'N', backgroundColor: '#E0E0E0', color: '#1A2832' },
    { letter: 'Ñ', backgroundColor: '#5B1C6E', color: '#fff' },
    { letter: 'O', backgroundColor: '#90CAF9', color: '#1A2832' },
    { letter: 'P', backgroundColor: '#085666', color: '#fff' },
    { letter: 'Q', backgroundColor: '#BC99C2', color: '#1A2832' },
    { letter: 'R', backgroundColor: '#D81B60', color: '#fff' },
    { letter: 'S', backgroundColor: '#B2DFDB', color: '#1A2832' },
    { letter: 'T', backgroundColor: '#424242', color: '#fff' },
    { letter: 'U', backgroundColor: '#E6EE9C', color: '#1A2832' },
    { letter: 'V', backgroundColor: '#431B92', color: '#fff' },
    { letter: 'W', backgroundColor: '#EF9A9A', color: '#1A2832' },
    { letter: 'X', backgroundColor: '#6D4C41', color: '#fff' },
    { letter: 'Y', backgroundColor: '#9EAFE8', color: '#1A2832' },
    { letter: 'Z', backgroundColor: '#2E3E56', color: '#fff' }
  ]

  let clearString = capLetters(string)

  let initialLetter = clearString[1]
    ? clearString[1].toUpperCase()
    : clearString[0]
    ? clearString[0].toUpperCase()
    : 'S'

  const colorAvatar = colors.filter(({ letter }) => letter == initialLetter)
  const { backgroundColor, color } = colorAvatar[0]
  return { backgroundColor: backgroundColor, color: color }
}
