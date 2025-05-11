import { JSX } from "react"

export type Service = {
  id: number
  icon?: JSX.Element
  title: string
  description: string
  image: string
  subServices: SubService[]
 
}

export type SubService = {
  title: string
  description: string
  image: string
  price?: number
}

