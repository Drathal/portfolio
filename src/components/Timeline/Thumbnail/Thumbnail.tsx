import { FC } from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

import Link from '../../Link'
import { useStyles } from './Thumbnail.style'

interface IProps {
  link?: string
  thumbnail?: string
  title: string
}

export const Thumbnail: FC<IProps> = ({ link, title, thumbnail }) => {
  const classes = useStyles()

  if (!thumbnail) return null

  return (
    <Link to={link}>
      <Card raised={true} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={thumbnail}
            title={title}
          />
        </CardActionArea>
      </Card>
    </Link>
  )
}
