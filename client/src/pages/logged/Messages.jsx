import React, { Component } from 'react'
import { Card, Button} from 'react-bootstrap';
import Wrapper from '../../components/Wrapper/Wrapper'

class Message extends Component{

    render(){
     
      return(
        <Wrapper>
            <content>
              <h2>
                Messages
              </h2>
                <div >
                  <nav>
                    <div>
                      fhfg
                    </div>
                  </nav>
                </div>
            </content>
            <Card>
              <input
                placeholder="Enter a message"
                value="Sdfsfsd"
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Button size="small" color="primary">
                Exit
              </Button>
            </Card>
          </Wrapper>
        );
      }
  }
  
  export default Message