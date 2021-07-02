/**
 * 将2021-06-18T14:59:58.000Z" -> 转正常的 yyyy-MM-dd HH:MM:SS
 * @param date 
 * @returns 
 */
export function renderTime(date: string) {
  let json_date = new Date(date).toJSON();
  return new Date(Number(new Date(json_date)) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}
