import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';

// It Generates diagnostic report PDF and open Android Share Dialog

export const Report = async (session) => {
    if (!session) return ;

    const html = `
    <h1>VoltShift Diagnostic Report </h1>

    <hr/>

    <h3> Vehicle Information</h3>
    <p><b>VIN:</b> ${session.vin}</p>
    <p><b>Date:</b> ${session.date}</p>

    <hr/>

    <h3>Diagnostic Summary</h3>
    <p>Session Completed Successfully.</p>

    <br/>
    <p>Generated Offline via VoltShift</p>
    `;

    try{
        const file = await RNHTMLtoPDF.convert({
            html,
            fileName: 'VoltShift_Report',
            directory: 'Documents'
        });

        await Share.open({
            url: `file://${file.filePath}`
        });

    } catch(e) {
        console.log("PDF ERROR", e);
    }
};
