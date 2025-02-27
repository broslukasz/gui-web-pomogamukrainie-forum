import { OffersTransportOffer, TransportOffer, TransportOfferDefinitionDTO } from '@app/core/api';

export const transportOffer = (body: TransportOfferDefinitionDTO): TransportOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
  };
};

export const transportList: OffersTransportOffer = {
  content: [
    {
      id: 9,
      userFirstName: 'Marta',
      title: 'Transport busem 8osobowy',
      description:
        'Witam, mam busa 8 osobowego jestem wstanie pomóż w transporcie. Mogę też przewieź rzeczy pod granice.',
      modifiedDate: '2022-03-14T10:36:12Z',
      origin: { region: 'Pomorskie', city: 'Gdynia' },
      destination: { region: 'Pomorskie', city: 'Gdynia' },
      capacity: 11,
      transportDate: '2022-03-14',
    },
    {
      id: 11,
      userFirstName: 'Mariusz',
      title: 'Darmowy transport na granicę i z granicy z Ostrowa i okolic',
      description:
        'Darmowy transport z Ostrowa i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-14T10:36:12Z',
      origin: { region: 'Pomorskie', city: 'Gdańsk' },
      destination: { region: 'Mazowieckie', city: 'Warszawa' },
      capacity: 10,
      transportDate: '2022-03-14',
    },
    {
      id: 21,
      userFirstName: 'Marta',
      title: 'Transport busem 8osobowy',
      description:
        'Witam, mam busa 8 osobowego jestem wstanie pomóż w transporcie. Mogę też przewieź rzeczy pod granice.',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: { region: 'Pomorskie', city: 'Gdynia' },
      destination: { region: 'Pomorskie', city: 'Gdynia' },
      capacity: 11,
      transportDate: '2022-03-16',
    },
    {
      id: 23,
      userFirstName: 'Mariusz',
      title: 'Darmowy transport na granicę i z granicy z Ostrowa i okolic',
      description:
        'Darmowy transport z Ostrowa i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: { region: 'Pomorskie', city: 'Gdańsk' },
      destination: { region: 'Mazowieckie', city: 'Warszawa' },
      capacity: 10,
      transportDate: '2022-03-16',
    },
  ],
  totalElements: 4,
  totalPages: 1,
};
