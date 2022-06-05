import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack
} from '@chakra-ui/react'

function Fols() {
  const PORT = 3001
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [equipment, setEquipment] = useState('')
  const [appl, setAppl] = useState('')
  const [issueDesc, setIssueDesc] = useState('')
  const [category, setCategory] = useState('')
  const [keywords, setKeywords] = useState('')
  const [status, setStatus] = useState('')
  const [issueDate, setIssueDate] = useState('')
  const [revisionNumber, setRevisionNumber] = useState('')
  const [revisionDate, setRevisionDate] = useState('')

  const isError = false

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(`http://52.202.196.108:3001/admin/createFol`, {
        Title: title,
        Equipment: equipment,
        Description: desc,
        Applicability: appl,
        IssueDescription: issueDesc,
        Category: category,
        Status: status,
        IssueDate: issueDate,
        RevisionNumber: revisionNumber,
        RevisionDate: revisionDate,
        Keywords: keywords
      })

      .then(function (response) {
        console.log(response)
      })
      .then(() => {
        window.location.href = 'http://localhost:3000/fols'
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5rem'
        }}
      >
        <form>
          <Stack>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                placeholder="MRC-008/10"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="equipment">Equipment</FormLabel>
              <Input
                id="equipment"
                placeholder="Mercedes"
                value={equipment}
                onChange={e => setEquipment(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input
                id="description"
                placeholder=""
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="applicability">Applicability</FormLabel>
              <Input
                id="applicability"
                placeholder=""
                value={appl}
                onChange={e => setAppl(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="issueDescription">
                Issue Description
              </FormLabel>
              <Input
                id="issueDescription"
                placeholder=""
                value={issueDesc}
                onChange={e => setIssueDesc(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="category">Category</FormLabel>
              <Input
                id="category"
                placeholder=""
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="status">Status</FormLabel>
              <Input
                id="status"
                placeholder=""
                value={status}
                onChange={e => setStatus(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="issueDate">Issue Date</FormLabel>
              <Input
                id="issueDate"
                placeholder="01/02/2022"
                value={issueDate}
                onChange={e => setIssueDate(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="revisionNumber">Revision Number</FormLabel>
              <Input
                id="revisionNumber"
                placeholder="10"
                value={revisionNumber}
                onChange={e => setRevisionNumber(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="revisionDate">Revision Date</FormLabel>
              <Input
                id="revisionDate"
                placeholder="10/02/2022"
                value={revisionDate}
                onChange={e => setRevisionNumber(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
              <Input
                id="keywords"
                placeholder="Noise, Bad smell"
                value={keywords}
                onChange={e => setKeywords(e.target.value)}
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </form>
      </section>
    </>
  )
}

export default Fols
