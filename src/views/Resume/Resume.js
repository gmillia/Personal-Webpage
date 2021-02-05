import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//HOOK
import { useWindowSize } from 'react-use';

//PDF
import { Document, Page } from 'react-pdf';
import ResumePDF from 'assets/resume/Resume.pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(theme => ({
    link: {
        fontSize: 35,
        paddingTop: 15,
        paddingBottom: 30,
        textDecoration: 'none'
    }
}));

const Resume = () => {
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const { width } = useWindowSize();

    useEffect(() => {
        window.open({ResumePDF}, '_blank')
    })

    /*
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }*/

    /*
    return (
        <Grid container alignContent='center' justify='center' direction='column'>
            <Grid container item xs={12} className={classes.link} justify='center'>
                <a href={ResumePDF} target='_blank'>Download</a>
            </Grid>
            <Grid container item xs={12} sm={10} justify='center'>
                <Grid item>
                    <Document
                        file={ResumePDF}
                        noData={'Invalid Resume.'}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page 
                                key={`page_${index + 1}`} 
                                pageNumber={index + 1} 
                                width={width}
                            />
                        ))}
                    </Document>
                </Grid>
            </Grid>
        </Grid>
    )
    */
};  

export default Resume;