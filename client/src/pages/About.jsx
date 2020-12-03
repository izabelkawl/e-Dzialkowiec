import React, { Component } from 'react';
import styled from 'styled-components';
import { Tab, Col, Row, ListGroup, Card, CardColumns } from 'react-bootstrap';
import NavBar from '../components/NavBar';

const Wrapper = styled.div`
  background-position: center top;
`;

const Container = styled.div`
  margin-top: 100px;
  padding:50px;
  width: 80vw;
`;

const Title = styled.h1.attrs({
  className: 'h1',
})`
  font-size: 32px;
  padding-bottom: 50px;
  `

class About extends Component {
  render() {

    return (
      <Wrapper>
        <NavBar />
        <Container>

          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={{ span: 2 }} align="center" >
                <ListGroup >
                  <ListGroup.Item action href="#link1" variant="warning">
                    O nas
              </ListGroup.Item>
                  <ListGroup.Item action href="#link2" variant="warning">
                    Skład zarządu
              </ListGroup.Item>
                  <ListGroup.Item action href="#link3" variant="warning" >
                    Ogłoszenia zarządu
              </ListGroup.Item>
                  <ListGroup.Item action href="#link4" variant="warning">
                    RODO
              </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={{ offset: 1, span: 7 }}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <Title>O nas</Title>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta cupiditate quibusdam voluptate. Tempore amet quo magnam dicta quam? Non accusamus, unde, ullam dolorum id ipsum deserunt quibusdam earum fugiat nesciunt harum sapiente autem doloribus odit sit mollitia nobis commodi hic pariatur atque molestias veritatis? Accusantium facere autem explicabo eveniet voluptatem, commodi accusamus ex ea error. Ea odio nostrum eveniet ratione eius quo quam numquam ullam, aliquid earum id doloribus sit perspiciatis neque culpa voluptatibus labore nemo aperiam! Harum saepe doloribus numquam sunt commodi culpa, rem quaerat alias corrupti ab dolores vel voluptas laboriosam voluptatem placeat? Quisquam ducimus suscipit in voluptatibus, nobis est rerum voluptas numquam quas nostrum quo eius et veritatis tempore earum, eveniet, labore consequatur? Fugiat hic aliquid recusandae quisquam tempore tempora delectus tenetur rerum! Facere deleniti, et labore magni dolore provident, cum ab repellat ex eos ad impedit quasi rem cupiditate quas, corr.
                </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <Title>Zarząd</Title>
                    <CardColumns>

                      <Card>
                        <Card.Body>
                          <Card.Title>Prezes Ogrodu </Card.Title>
                          <Card.Text>
                            Małgorzata Wolak
      </Card.Text>

                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Body>
                          <Card.Title>Wiceprezes</Card.Title>
                          <Card.Text>
                            Piotr Skrzypiński
      </Card.Text>

                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Body>
                          <Card.Title>Sekretarz </Card.Title>
                          <Card.Text>
                            Monika Sekuła
      </Card.Text>

                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Body>
                          <Card.Title>Skarbnik </Card.Title>
                          <Card.Text>
                            Kazimierz Sochacki
      </Card.Text>

                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Body>
                          <Card.Title>Członek </Card.Title>
                          <Card.Text>
                            Grzegorz Necel
      </Card.Text>

                        </Card.Body>
                      </Card>
                    </CardColumns>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <Title>Ogłoszenia</Title>

                    <Card>
                      <Card.Header>Quote</Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <p>
                            {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
                          </p>
                          <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>
                    <br></br>
                    <Card>
                      <Card.Header>Quote</Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <p>
                            {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime deserunt optio adipisci, laudantium maiores officia error, odit vero consequatur ea obcaecati! Vitae, eum iure impedit ducimus soluta animi hic quas illo enim, mollitia quibusdam unde odio. Tempora eum quaerat optio, culpa praesentium esse ipsa veniam! Nesciunt, placeat ratione officia, dolorem, veniam tenetur illum obcaecati quis ad dolore similique eius itaque eum excepturi cum exercitationem omnis ex ab ipsa velit sequi repellat nostrum. Voluptas vero necessitatibus repellendus, odit tempora corrupti repudiandae dolore est vitae eius recusandae sapiente blanditiis corporis quaerat suscipit perferendis quidem ea consectetur exercitationem. Quae fugit velit modi.{' '}
                          </p>
                          <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>

                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title>


                  Przez
                  Rodzinny Ogród Działkowy Wisła w Krakowie ul Klasztorna 31-977

                  W związku ze zmianami w zakresie przetwarzanie danych osobowych na skutek Rozporządzenia Parlamentu Europejskiego i Rady UE 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) zwanego RODO informujemy:

                  Administratorem Danych Osobowych zgromadzanych w ramach działalności
                  Rodzinny Ogród Działkowy Wisła jest:
                  Rodzinny Ogród Działkowy Wisła ul Klasztorna 31-977 Kraków

                  Administrator będzie przetwarzać dane w celu udziału w projektach, skorzystania z innej formy wsparcia oferowanej przez ROD Wisła  lub uzyskania odpowiedzi na pytanie zadane drogą elektroniczną. Podanie danych ma charakter dobrowolny, ale jest konieczne do wzięcia udziału w danym projekcie, skorzystania z innef formy wsparcia lub uzyskania odpowiedzi na pytanie zadane drogą elektroniczną. Każdy kogo dane osobowe przetwarzamy ma prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, gdy uzna iż przetwarzanie jego danych osobowych narusza przepisy RODO.
                  Dzięki RODO:

                </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Wrapper>
    )
  }
}

export default About