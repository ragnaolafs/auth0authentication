import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
		background: '#eee'
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
});

function GridList({ photos }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ImageList rowHeight={300} gap={30} className={classes.gridList}>
				<ImageListItem key="Subheader" cols={6} style={{ height: 'auto' }}>
					<ListSubheader component="div" />
				</ImageListItem>
				{photos && photos.map((tile) => (
					<ImageListItem key={tile.id}>
						<img src={tile.image_link} alt={tile.name} />
						<ImageListItemBar title={tile.name} />
					</ImageListItem>
				))}
			</ImageList>
		</div>
	)
}

export default GridList;