import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: 340,
            height: 850,
        },
        alignItems: 'center',
    },
    topSection: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 36,
        marginBottom: 36,
        marginLeft: 20,
    },
    button: {
        marginLeft: 47,
    },
    card: {
        width: 145,
        height: 227,
        marginTop: 15,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    cardList: {
        justifyContent: 'center',
    }
}));

export default function Sidebar() {
    const classes = useStyles();
    const initialCardArray = [{id: 1, rank:"Sliver", src:'' }, {id: 2, rank:"Gold",src:'' }, {id: 3, rank:"Diamond", src:'' }];
    const [cardArray, setCardArray] = React.useState(initialCardArray);


    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <div className={classes.topSection}>
                    <Typography variant="h6" noWrap>
                        Get More Tickets
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Buy
                    </Button>
                </div>
                <Divider />
                <Droppable droppableId="sidebar">
                    {(provided) => (
                        <ul className={classes.cardList} {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                cardArray.map(({id, rank, src}, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <Card className={classes.card} >
                                                    {rank}
                                                </Card>
                                                </li>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }
                        </ul>
                    )}
                </Droppable>

            </Paper>
        </div>
    );
}