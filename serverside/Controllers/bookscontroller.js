const mongoose = require('mongoose');
require("../Models/books");
const Books = mongoose.model("Books");

exports.addbook = async (req, res) =>{
    try {
        const newBook = new Books({
          title: req.body.title,
          description: req.body.description,
          type: req.body.type,
          image: {
            url: req.body.image.url,
            altText: req.body.image.altText,
          },
          pdf: {
            file: {
              url: req.body.pdf.file.url,
              altText: req.body.pdf.file.altText,
            },
          },
          amount: req.body.amount
        });
    
        await newBook.save();

        const pdfCoApiEndpoint = 'https://api.pdf.co/v1/pdf/convert/to/html';

        // Make API request to convert PDF to HTML
        const pdfCoApiResponse = await axios.post(pdfCoApiEndpoint, {
            url: req.body.pdf.file.url, // Assuming PDF file URL
            name: 'Converted_HTML', // Specify a name for the converted HTML file
            async: true, // Specify if the conversion should be asynchronous
            profiles: 'html', // Specify the conversion profile (HTML)
            password: '', // Specify PDF password if applicable
            encrypt: false, // Specify if the output HTML should be encrypted
        }, {
            headers: {
                'x-api-key': 'rinesagrabovci08@gmail.com_pys3V4T8984e4yu8vXNG147UKDNoBtUv0pAISoQdiWsUVITYyXWI26U882fHKnE7dSiE20uS5Oj8fF97zHe4pXptjCH7OZ3ZD0bS0k8S6jpaw77YlD1Z8qh47ibYr3q0InM8fLm9m0113gE32tg52a158q', // Replace with your PDF.co API key
                'Content-Type': 'application/json',
            },
        });

        console.log('PDF.co API Response:', pdfCoApiResponse.data);
        res.status(201).json({ message: 'Book added successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}