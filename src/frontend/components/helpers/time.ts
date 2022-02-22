import type { Time } from "../../../types/Main"

export function secondsToTime(seconds: number): Time {
  let h: any = Math.floor(seconds / 3600)
  let m: any = Math.floor((seconds - h * 3600) / 60)
  let s: any = Math.round(seconds - h * 3600 - m * 60)
  // TODO: ms
  // let ms: any = Math.round(seconds - h * 3600 - m * 60 - s * 60)
  let ms: any = 0

  if (h < 10) h = "0" + h
  if (m < 10) m = "0" + m
  if (s < 10) s = "0" + s
  if (ms < 10) ms = "0" + ms

  return { ms, s, m, h }
}

export function joinTime(time: Time, ms: boolean = false): string {
  let arr: string[] = [time.m, time.s]
  if (Number(time.h)) arr.unshift(time.h)
  if (ms) arr.push(time.ms)
  return arr.join(":")
}

export function dateToString(date: any, full: boolean = false, d: any = {}): string {
  date = new Date(date)
  let year: any = date.getFullYear()
  let month: any = date.getMonth() + 1
  let day: any = date.getDate()

  let string: string = ""
  if (full) {
    let weekday = d.weekday ? d.weekday[date.getDay() === 0 ? 7 : date.getDay()] : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]
    month = d.month
      ? d.month[date.getMonth() + 1]
      : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]
    weekday = weekday[0].toUpperCase() + weekday.slice(1, weekday.length)

    // Monday 6. February, 2021
    string = weekday + " " + day + ". " + month + ", " + year
  } else {
    if (month < 10) month = "0" + month
    if (day < 10) day = "0" + day
    year = year.toString().slice(-2)
    string = [day, month, year].join(".")
  }

  // TODO: get format (DD.MM.YY) | YYYY-MM-DD | MM/DD/YYYY
  return string
}
