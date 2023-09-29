import { GetStaticProps, GetStaticPropsContext } from 'next'
import Image from 'next/image'
import StoreIcon from '@mui/icons-material/Store'
import CategoryIcon from '@mui/icons-material/Category'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import { Chip, Rating, Typography } from '@mui/material'
import { ProductType } from '../../../utils/api.types'
import { getOneProduct, getProducts } from '../../../utils/api'

import styles from './product.module.scss'

type Props = {
  data: ProductType
}

export default function Products({ data }: Props) {
  const { category, description, image, price, title, rating } = data

  return (
    <section className={styles.product}>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={styles.row}
      >
        <Chip
          label="Name:"
          color="primary"
        />
        {title}
      </Typography>

      <Image
        width={100}
        height={100}
        src={image}
        alt="image of product"
      />

      <Typography
        className={styles.flex}
        variant="subtitle1"
        gutterBottom
      >
        <Chip label="Price:" />
        {price} <MonetizationOnIcon />
      </Typography>

      <Typography
        className={styles.flex}
        variant="subtitle1"
        gutterBottom
      >
        <Chip label="Category:" />
        {category} <CategoryIcon />
      </Typography>

      <Typography
        className={styles.flex}
        variant="subtitle1"
        gutterBottom
      >
        <Chip label="Rating:" />
        <Rating
          name="read-only"
          value={rating.rate}
          readOnly
        />
      </Typography>

      <Typography
        className={styles.flex}
        variant="subtitle1"
        gutterBottom
      >
        <Chip label="Amount:" />
        {rating.count}
        <StoreIcon />
      </Typography>

      <Chip label="Description:" />

      <Typography
        variant="subtitle1"
        gutterBottom
      >
        {description}
      </Typography>
    </section>
  )
}

type PathType = {
  params: {
    id: string
  }
}

export async function getStaticPaths() {
  const arr = await getProducts()

  const paths = arr.reduce((acc: PathType[], el: ProductType) => {
    return [...acc, { params: { id: el.id.toString() } }]
  }, [])

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context
  const numberPage = params!.id
  const product = await getOneProduct(numberPage as string)

  return {
    props: {
      data: product
    }
  }
}
