import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

import { Page } from 'components';

import { Document } from 'react-pdf';

import ResumePDF from 'assets/resume/Resume.pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        minHeight: '100vh'
    }
}));

const Resume = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <a href={ResumePDF} target='_blank'>Download</a>
            <Document
                file={ResumePDF}
                noData={'Invalid Resume.'}
                onLoadSuccess={() => { console.log('LOADED') }}
            >

            </Document>
        </div>
    )
};  

export default Resume;