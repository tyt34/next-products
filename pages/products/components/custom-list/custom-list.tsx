import React, { FC, useState } from 'react'
import Link from 'next/link'
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import DescriptionIcon from '@mui/icons-material/Description'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { ProductType } from '../../../../utils/api.types'

import styles from './custom-list.module.scss'

interface Props {
  name: string
  products: ProductType[]
}

export const CustomList: FC<Props> = ({ name, products }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AutoAwesomeMotionIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
      >
        {products.map((product) => {
          return (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className={styles.link}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary={product.title}></ListItemText>
              </ListItemButton>
            </Link>
          )
        })}
      </Collapse>
    </>
  )
}
