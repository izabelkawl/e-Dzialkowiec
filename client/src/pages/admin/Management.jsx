import React, { Component } from "react";
import { Table, Form, Tab, Col, Row, ListGroup, Button } from 'react-bootstrap';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding:50px;
    margin-top: 50px;
    background-color: white; 
`;

const Title = styled.h1.attrs({
    className: 'h1',
})`
font-size: 32px`


class Management extends Component {
    render() {
        return (
            <Wrapper>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={{ span: 2 }} align="center" >
                            <ListGroup >
                                <ListGroup.Item action href="#link1">
                                    O nas
              </ListGroup.Item>
                                <ListGroup.Item action href="#link2" >
                                    Skład zarządu
              </ListGroup.Item>
                                <ListGroup.Item action href="#link3" >
                                    Ogłoszenia zarządu
              </ListGroup.Item>
                                <ListGroup.Item action href="#link4">
                                    RODO
              </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={{ offset: 1, span: 7 }}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    <Form>
                                        <Form.Group>
                                            <Title>O nas</Title>
                                            <Form.Control as="textarea" rows={10} value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta cupiditate quibusdam voluptate. Tempore amet quo magnam dicta quam? Non accusamus, unde, ullam dolorum id ipsum deserunt quibusdam earum fugiat nesciunt harum sapiente autem doloribus odit sit mollitia nobis commodi hic pariatur atque molestias veritatis? Accusantium facere autem explicabo eveniet voluptatem, commodi accusamus ex ea error. Ea odio nostrum eveniet ratione eius quo quam numquam ullam, aliquid earum id doloribus sit perspiciatis nequesandae quisquam tempore tempora delectus tenetur rerum! Facere deleniti, et labore magni dolore provident, cum ab repellat ex eos ad impedit quasi rem cupiditate quas, corrupti fuga excepturi quia  aperiam asperiores sapiente rerum! Ullam, libero nesciunt! Optio ipsum, ipsam nisi illum praesentium sequi, commodi iste tenetur est pariatur corporis a, beatae ducimus? Adipisci distinctio illo s." />
                                        </Form.Group>
                                        <Button className="float-right">Zapisz</Button>
                                    </Form>
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link2">
                                    <Title>Zarząd</Title>
                                    <Table >
                                        <thead>
                                            <th>Stopień</th>
                                            <th>Osoba</th>
                                            <th></th>
                                            <th></th>
                                        </thead>
                                        <tbody>
                                            <td>Prezes zarządu</td>
                                            <td>Małgorzata Wolak</td>
                                            <td><Button variant="danger">Usuń</Button></td>
                                            <td><Button variant="success">Aktualizuj</Button></td>
                                        </tbody>
                                        <tbody>
                                            <td>Wiceprezes</td>
                                            <td>Piotr Skrzypiński</td>
                                            <td><Button variant="danger">Usuń</Button></td>
                                            <td><Button variant="success">Aktualizuj</Button></td>
                                        </tbody>
                                        <tbody>
                                            <td>Sekretarz</td>
                                            <td>Monika Sekuła</td>
                                            <td><Button variant="danger">Usuń</Button></td>
                                            <td><Button variant="success">Aktualizuj</Button></td>
                                        </tbody>
                                    </Table>
                                    <Title>Dodaj osobę</Title>
                                    <Form>

                                        <Form.Group>
                                            <Form.Label>Stopień</Form.Label>
                                            <Form.Control />
                                            <Form.Label>Osoba</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Button className="float-right">Dodaj</Button>
                                    </Form>

                                </Tab.Pane>
                                <Tab.Pane eventKey="#link3">
                                    <Title>Ogłoszenia</Title>
                                    <Table >
                                        <thead>
                                            <th>Tytuł</th>
                                            <th>treść</th>
                                            <th>Data</th>
                                            <th></th>
                                            <th></th>
                                        </thead>
                                        <tbody>
                                            <td>Quote</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</td>
                                            <td>Someone famous in Source Title</td>
                                            <td><Button variant="danger">Usuń</Button></td>
                                            <td><Button variant="success">Aktualizuj</Button></td>
                                        </tbody>
                                        <tbody>
                                            <td>Quote</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</td>
                                            <td>Someone famous in Source Title</td>
                                            <td><Button variant="danger">Usuń</Button></td>
                                            <td><Button variant="success">Aktualizuj</Button></td>
                                        </tbody>
                                        <tbody>
                                            <td>Quote</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</td>
                                            <td>Someone famous in Source Title</td>
                                            <td><Button variant="danger">Usuń</Button></td>
                                            <td><Button variant="success">Aktualizuj</Button></td>
                                        </tbody>
                                    </Table>
                                    <Title>Dodaj ogłoszenie</Title>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Tytuł</Form.Label>
                                            <Form.Control />
                                            <Form.Label>Treść</Form.Label>
                                            <Form.Control as="textarea" rows={5} />
                                        </Form.Group>
                                        <Button className="float-right">Dodaj</Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link4">
                                    <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Treść</Form.Label>
                                            <Form.Control as="textarea" rows={10} value="
                  Przez
                  Rodzinny Ogród Działkowy Wisła w Krakowie ul Klasztorna 31-977

                  W związku ze zmianami w zakresie przetwarzanie danych osobowych na skutek Rozporządzenia Parlamentu Europejskiego i Rady UE 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) zwanego RODO informujemy:

                  Administratorem Danych Osobowych zgromadzanych w ramach działalności
                  Rodzinny Ogród Działkowy Wisła jest:
                  Rodzinny Ogród Działkowy Wisła ul Klasztorna 31-977 Kraków

                  Administrator będzie przetwarzać dane w celu udziału w projektach, skorzystania z innej formy wsparcia oferowanej przez ROD Wisła  lub uzyskania odpowiedzi na pytanie zadane drogą elektroniczną. Podanie danych ma charakter dobrowolny, ale jest konieczne do wzięcia udziału w danym projekcie, skorzystania z innef formy wsparcia lub uzyskania odpowiedzi na pytanie zadane drogą elektroniczną. Każdy kogo dane osobowe przetwarzamy ma prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, gdy uzna iż przetwarzanie jego danych osobowych narusza przepisy RODO.
                  Dzięki RODO:
                  ● wiesz, jakie dane przetwarzamy – i co z nimi robimy
                  ● korygujesz swoje dane – gdybyś znalazł błędy
                  ● możesz przenieść swoje dane tam, gdzie będziesz chciał
                  ● możesz zostać zapomnianym

                  Stosując RODO:
                  ● przetwarzamy dane zawsze zgodnie z prawemi w dany celu
                  ● przetwarzamy tylko te dane które są koniecznie potrzebne


                  ● uaktualnimy Twoje dane, monitorujemty ich rzetelność i prawdziwość
                  ● chronimy Twoje dane, dbamy o ich poufność

                  Jakie dane przetwarzamy?
                  W zależności od specyfiki danego działania: czy jest to projekt, grant, kwestie związane z zatrudnieniem , przetwarzamy wyłącznie dane, które nam podałeś i na których przetwarzanie wyraziłeś zgodę. Są to:
                  ● imię i nazwisko, płeć,
                  ● numer PESEL, data urodzenia,
                  ● adres zamieszkania, mail, telefon, adres
                  ● dane z dokumentów (dowód osobisty, paszport), NIP, REGON,
                  ● dane dotyczące zdrowia w zakresie niepełnosprawności (tylko za zgodą).
                  ● inne dane które wymagane są np. przy realizacji projektów finansowanych z UE ( np. sytuacja na rynku pracy, wykształcenie, wiek itp.)

                  Przetwarzamy Twoje dane gdy:
                  ● gdy wyraziłeś na to zgodę,
                  ● gdy rozpatrujemy Twój wniosek lub inną formę aplikowania (np. o udział w projekcie)
                  ● gdy mamy ku temu podstawę prawną, jak np. ustawa o ubezpieczeniach, kodeks pracy itp.
                  ● gdy wymaga tego nasz (jako administratora danych) prawnie uzasadniony interes (np. oceniamy Twoją aplikację, kandydaturę, wniosek, badamy satysfakcję, dostarczamy produkty i usługi dostosowane do Twoich potrzeb).

                  RODO formułuje 6 zasad przetwarzania danych osobowych, którymi kieruje się nasza Fundacja, gdy przetwarza dane osobowe. Są nimi:
                  ● zasada zgodności z prawem, rzetelności i przejrzystości:

                  przetwarzamy dane osobowe w sposób zgodny z prawem. O wszystkich kwestiach z tym związanych informujemy powszechnymi sposobami komunikacji i jak najprostszym językiem, by osoby, których dane dotyczą, miały jasność, że zbieramy, przechowujemy lub w inny sposób przetwarzamy ich określone dane osobowe;
                  ● zasada minimalizacji i adekwatności danych:

                  przetwarzamy tylko te dane, które są rzeczywiście potrzebne, by zrealizować dany cel;
                  ● zasada prawidłowości danych:

                  dbamy o to, by dane, które przetwarzamy, były zgodne z prawdą i aktualne. Dlatego możemy co jakiś czas prosić osoby, których dane przetwarzamy, o to, by sprawdziły i zaktualizowały swoje dane. Prosimy ich też o to, by osoby których dane przetwarzamy informowali nas o wszelkich zmianach swoich danych osobowych (imię i nazwisko, adres itp.);
                  ● zasada ograniczenia celu oraz przechowywania przetwarzanych danych:

                  dane osobowe zbieramy jedynie w konkretnym, wyraźnym i uzasadnionym celu, którego nie moglibyśmy osiągnąć w inny sposób. Przechowujemy dane w formie, która umożliwia identyfikację osoby, której dane dotyczą. Przetwarzamy je tylko tak długo, jak jest to niezbędne, by zrealizować cel, dla którego je pozyskaliśmy (chyba, że do dalszego przetwarzania zobowiązują nas przepisy prawa, np. po zakończeniu projektu przechowujemy formularze zgłoszeniowe tak długo jak wymaga tego umowa o dofinansowanie);
                  ● zasada integralności i poufności danych:

                  zapewniamy takie rozwiązania, dzięki którym dane osobowe, które przetwarzamy, są bezpieczne. Chronimy dane przed niedozwolonym lub niezgodnym z prawem przetwarzaniem oraz przypadkową utratą, zniszczeniem lub uszkodzeniem;
                  ● zasada rozliczalności:

                  jesteśmy w stanie wykazać że w odniesieniu do danych osobowych działamy zgodnie z przepisami prawa, uwzględniamy ochronę danych w różnych etapach (np. przy aplikowania o środki, przygotowaniu rekrutacji do zadania itp.) oraz zapewniamy domyślną ochronę danych osobowych.
                  Dane przetwarzamy przez czas, jaki jest niezbędny, aby osiągnąć cel przetwarzania. Konkretny okres wskazujemy w dokumentacji, którą przekazujemy osobom, których dane dotyczą" />
                                        </Form.Group>
                                        <Button className="float-right">Zapisz</Button>
                                    </Form>



                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>


            </Wrapper>
        )
    }
};

export default Management;
