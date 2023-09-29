import React from 'react'
import { GetStaticProps } from 'next'
import { CustomList } from './components/custom-list/custom-list'
import { List, ListSubheader } from '@mui/material'
import { ProductsType } from '../../utils/api.types'
import { getProducts } from '../../utils/api'
import { groupBy } from '../../utils/groupBy'

import styles from './products.module.scss'

type Props = {
  data: ProductsType
}

export default function Products({ data }: Props) {
  const keysArr = Object.keys(data)

  return (
    <List
      className={styles.list}
      component="nav"
      aria-labelledby="nested-list-products"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-products"
        >
          Products
        </ListSubheader>
      }
    >
      {keysArr.map((nameList) => {
        return (
          <CustomList
            key={nameList}
            name={nameList}
            products={data[nameList]}
          />
        )
      })}
    </List>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts()

  return {
    props: {
      data: groupBy(products)
    }
  }
}
