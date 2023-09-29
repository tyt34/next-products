import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Slider,
  TextField
} from '@mui/material'

import styles from './forma.module.scss'
import { getOneProduct } from '../../utils/api'
import { useEffect, useState } from 'react'
import { ProductType } from '../../utils/api.types'

export default function Forma() {
  const [data, setData] = useState<ProductType | null>(null)
  const { query } = useRouter()
  const { id } = query

  const getData = async () => {
    const product = await getOneProduct(id as string)
    setData(product)
  }

  useEffect(() => {
    if (id) {
      console.log({ id })
      getData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  console.log({ data })

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 }
      }}
      className={styles.forma}
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Input title"
        variant="outlined"
      />

      <FormControl fullWidth>
        <InputLabel htmlFor="outlined-adornment-amount">
          Input price
        </InputLabel>

        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">$</InputAdornment>
          }
          label="Input price"
        />
      </FormControl>

      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="Input description"
        multiline
        rows={4}
        defaultValue=""
      />

      <Chip label="Rating:" />

      <Slider
        aria-label="Temperature"
        defaultValue={2.5}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
      />

      <TextField
        fullWidth
        id="outlined-basic"
        label="Input amount"
        variant="outlined"
      />

      <Button
        fullWidth
        variant="contained"
      >
        Save
      </Button>
    </Box>
  )
}
