import { Badge } from '@radix-ui/themes'
import React from 'react'

interface Probs {
    status: string
}

const statusMap: Record<string, {label:string, color:"red" | "violet" | "green"}> = {
    "OPEN": {label:'Open', color:'red'},
    "IN_PROGRESS": {label:'In Progress', color:'violet'},
    "CLOSED": {label:'Closed', color:'green'},
}

function IssueStatusBadge({status}:Probs) {
  return (
    <Badge color={statusMap[status.toUpperCase()].color}>
        {statusMap[status.toUpperCase()].label}
    </Badge>
  )
}

export default IssueStatusBadge