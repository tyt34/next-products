import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AddIcon from '@mui/icons-material/Add'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import EditIcon from '@mui/icons-material/Edit'
import { Chip, Fab, Tooltip } from '@mui/material'
import { pages } from '../../../constants/pages'

import styles from './layout.module.scss'

type LayoutProps = {
  children?: ReactNode
}

const { forma, home, products } = pages

const checkPage = (now: string, arr: string[]) => {
  const result = !arr.some((page) => now === page)
  return result
}

export default function Layout({ children }: LayoutProps) {
  const { pathname, query } = useRouter()

  const { id } = query

  console.log({ query, id })

  const isDisplayNavigation = pathname !== home
  const isDisplayChange = checkPage(pathname, [products, forma])
  const isDisplayProducts = pathname !== products
  const isDisplayForma = pathname !== forma

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      {isDisplayNavigation ? (
        <nav className={styles.navigation}>
          <Chip label="Navigation:" />

          {isDisplayProducts ? (
            <Link href="/products">
              <Tooltip title="Watch all products">
                <Fab
                  className={styles.fab}
                  color="secondary"
                  aria-label="edit"
                >
                  <AutoAwesomeMotionIcon />
                </Fab>
              </Tooltip>
            </Link>
          ) : null}

          {isDisplayForma ? (
            <Link href="/forma">
              <Tooltip title="Create a new product">
                <Fab
                  className={styles.fab}
                  color="secondary"
                  aria-label="edit"
                >
                  <AddIcon />
                </Fab>
              </Tooltip>
            </Link>
          ) : null}

          {isDisplayChange ? (
            <Link href={`/forma?id=${id}`}>
              <Tooltip title="Change this product">
                <Fab
                  className={styles.fab}
                  color="secondary"
                  aria-label="edit"
                >
                  <EditIcon />
                </Fab>
              </Tooltip>
            </Link>
          ) : null}
        </nav>
      ) : null}

      {children}
    </>
  )
}
