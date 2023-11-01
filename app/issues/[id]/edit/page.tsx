import React from 'react'
import IssueForm from '../../_components/IssueForm'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

interface Probs {
    params: {id:string}
}

async function EditIssuePage({params}:Probs) {
    const issue = await prisma.issue.findUnique({where: {id: parseInt(params.id)}})
    if (!issue) notFound()
  return (
    <IssueForm issue={issue}/>
  )
}

export default EditIssuePage
