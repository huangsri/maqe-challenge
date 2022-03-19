import dayjs, { Dayjs } from 'dayjs'

const DEFAULT_DATE_TIME_FORMAT = 'YYYY-MM-DD'

export const formatDateTime = (
  date: string | Dayjs,
  format = DEFAULT_DATE_TIME_FORMAT
): string => {
  return dayjs(date).format(format)
}
