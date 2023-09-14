import Card from 'react-bootstrap/Card';
import '../index.css'
function Contact() {
    return (
       
                    <div className='container'>
        <body className='mybody'>

           <div className="center-card">
                {[
                        'Dark',
                    ].map((variant) => (
                    <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <div className='center-header'>
                    <Card.Header>
                    <i class="bi bi-telephone-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                    </i> 
                    </Card.Header>
                    </div>
                  
                    <Card.Body>
                    <div className='center-title'>
                        <Card.Title> Phone Number </Card.Title>
                        
                    </div>
                    
                    <div className='center-text'>
                       <Card.Text>
                        079 1064 668
                        </Card.Text>
                    </div>
                       
                        
                    </Card.Body>
                    </Card>
                ))}
           </div>

           <div className="center-card2">
                {[
                        'Dark',
                    ].map((variant) => (
                    <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <div className='center-header'>
                    <Card.Header>
                     <i class="bi bi-envelope-at"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                            </svg>
                    </i>
                    </Card.Header>
                    </div>
                  
                    <Card.Body>
                    <div className='center-title'>
                        <Card.Title> Email Address </Card.Title>
                        
                    </div>
                    
                    <div className='center-text'>
                       <Card.Text>
                        bos.seretsi@gmail.com
                        </Card.Text>
                    </div>
                       
                        
                    </Card.Body>
                    </Card>
                ))}
           </div>

           <div className="center-card3">
                {[
                        'Dark',
                    ].map((variant) => (
                    <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <div className='center-header'>
                    <Card.Header>
                     <i class="bi bi-envelope-at"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                            </svg>
                    </i>
                    </Card.Header>
                    </div>
                  
                    <Card.Body>
                    <div className='center-title'>
                        <Card.Title> Work Email Address </Card.Title>
                        
                    </div>
                    
                    <div className='center-text'>
                       <Card.Text>
                       bosele.seretsi@dadevs.co.za
                        </Card.Text>
                    </div>
                       
                        
                    </Card.Body>
                    </Card>
                ))}
           </div>

           <div className="center-card4">
                {[
                        'Dark',
                    ].map((variant) => (
                    <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <div className='center-header'>
                    <Card.Header>
                     <i class="bi bi-whatsapp"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                    </i>
                    </Card.Header>
                    </div>
                  
                    <Card.Body>
                    <div className='center-title'>
                        <Card.Title> WhatsApp </Card.Title>
                        
                    </div>
                    
                    <div className='center-text'>
                       <Card.Text>
                      079 1064 668
                        </Card.Text>
                    </div>
                       
                        
                    </Card.Body>
                    </Card>
                ))}
           </div>
            
        </body>
     <div></div>
    
        </div>

    )
  }
  
  export default Contact



// import React from 'react';
// import Card from 'react-bootstrap/Card';

// const Contact = () => {
//   return (
//     <Card style={{ width: '30rem', margin: '20px auto' }}>
//       <Card.Body>
//         <Card.Title>Contact Information</Card.Title>
        
//         <Card.Text>
//           <strong>Email:</strong> your.email@example.com
//         </Card.Text>
        
//         <Card.Text>
//           <strong>WhatsApp:</strong> +1 234 567 8901
//         </Card.Text>
        
//         <Card.Text>
//           <strong>Phone:</strong> +1 234 567 8902
//         </Card.Text>
        
//         <Card.Text>
//           <strong>Work Address:</strong> 123 Main St, Anytown, Anywhere
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Contact;

