
/**
 * 格式化字符串
 * @param str 
 * @returns 
 */
export function formateStr(str: string) {
  return str.toLowerCase()
    .trim()
    // remove html tags
    .replace(/<[!\/a-z].*?>/ig, '')
    // remove unwanted chars
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-');
}