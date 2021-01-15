import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css'

const InfoBox = ({ title, cases, total, id }) => {
    return (
        <div className="col-md-4 mt-3">
            <Card id={id}>
                <CardContent>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="h4">
                        {new Intl.NumberFormat().format(cases)}
                    </Typography>
                    <Typography color="textSecondary">
                        {new Intl.NumberFormat().format(total)}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default InfoBox;