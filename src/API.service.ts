/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateDeckInput = {
  id?: string | null;
  name: string;
};

export type UpdateDeckInput = {
  id: string;
  name?: string | null;
};

export type DeleteDeckInput = {
  id?: string | null;
};

export type CreateCardInput = {
  id?: string | null;
  question: string;
  answer?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  cardDeckId: string;
};

export type UpdateCardInput = {
  id: string;
  question?: string | null;
  answer?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  cardDeckId?: string | null;
};

export type DeleteCardInput = {
  id?: string | null;
};

export type ModelDeckFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  and?: Array<ModelDeckFilterInput | null> | null;
  or?: Array<ModelDeckFilterInput | null> | null;
  not?: ModelDeckFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelCardFilterInput = {
  id?: ModelIDFilterInput | null;
  question?: ModelStringFilterInput | null;
  answer?: ModelStringFilterInput | null;
  createdAt?: ModelStringFilterInput | null;
  updatedAt?: ModelStringFilterInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
};

export type CreateDeckMutation = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
};

export type UpdateDeckMutation = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
};

export type DeleteDeckMutation = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
};

export type CreateCardMutation = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
  };
};

export type UpdateCardMutation = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
  };
};

export type DeleteCardMutation = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
  };
};

export type GetDeckQuery = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
};

export type ListDecksQuery = {
  __typename: "ModelDeckConnection";
  items: Array<{
    __typename: "Deck";
    id: string;
    name: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardQuery = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
  };
};

export type ListCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    question: string;
    answer: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateDeckSubscription = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
};

export type OnUpdateDeckSubscription = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
};

export type OnDeleteDeckSubscription = {
  __typename: "Deck";
  id: string;
  name: string;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
};

export type OnCreateCardSubscription = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
  };
};

export type OnUpdateCardSubscription = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
  };
};

export type OnDeleteCardSubscription = {
  __typename: "Card";
  id: string;
  question: string;
  answer: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deck: {
    __typename: "Deck";
    id: string;
    name: string;
  };
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDeck(input: CreateDeckInput): Promise<CreateDeckMutation> {
    const statement = `mutation CreateDeck($input: CreateDeckInput!) {
        createDeck(input: $input) {
          __typename
          id
          name
          cards {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDeckMutation>response.data.createDeck;
  }
  async UpdateDeck(input: UpdateDeckInput): Promise<UpdateDeckMutation> {
    const statement = `mutation UpdateDeck($input: UpdateDeckInput!) {
        updateDeck(input: $input) {
          __typename
          id
          name
          cards {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDeckMutation>response.data.updateDeck;
  }
  async DeleteDeck(input: DeleteDeckInput): Promise<DeleteDeckMutation> {
    const statement = `mutation DeleteDeck($input: DeleteDeckInput!) {
        deleteDeck(input: $input) {
          __typename
          id
          name
          cards {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDeckMutation>response.data.deleteDeck;
  }
  async CreateCard(input: CreateCardInput): Promise<CreateCardMutation> {
    const statement = `mutation CreateCard($input: CreateCardInput!) {
        createCard(input: $input) {
          __typename
          id
          question
          answer
          createdAt
          updatedAt
          deck {
            __typename
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardMutation>response.data.createCard;
  }
  async UpdateCard(input: UpdateCardInput): Promise<UpdateCardMutation> {
    const statement = `mutation UpdateCard($input: UpdateCardInput!) {
        updateCard(input: $input) {
          __typename
          id
          question
          answer
          createdAt
          updatedAt
          deck {
            __typename
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardMutation>response.data.updateCard;
  }
  async DeleteCard(input: DeleteCardInput): Promise<DeleteCardMutation> {
    const statement = `mutation DeleteCard($input: DeleteCardInput!) {
        deleteCard(input: $input) {
          __typename
          id
          question
          answer
          createdAt
          updatedAt
          deck {
            __typename
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardMutation>response.data.deleteCard;
  }
  async GetDeck(id: string): Promise<GetDeckQuery> {
    const statement = `query GetDeck($id: ID!) {
        getDeck(id: $id) {
          __typename
          id
          name
          cards {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDeckQuery>response.data.getDeck;
  }
  async ListDecks(
    filter?: ModelDeckFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDecksQuery> {
    const statement = `query ListDecks($filter: ModelDeckFilterInput, $limit: Int, $nextToken: String) {
        listDecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDecksQuery>response.data.listDecks;
  }
  async GetCard(id: string): Promise<GetCardQuery> {
    const statement = `query GetCard($id: ID!) {
        getCard(id: $id) {
          __typename
          id
          question
          answer
          createdAt
          updatedAt
          deck {
            __typename
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardQuery>response.data.getCard;
  }
  async ListCards(
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardsQuery> {
    const statement = `query ListCards($filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            question
            answer
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardsQuery>response.data.listCards;
  }
  OnCreateDeckListener: Observable<OnCreateDeckSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDeck {
        onCreateDeck {
          __typename
          id
          name
          cards {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateDeckSubscription>;

  OnUpdateDeckListener: Observable<OnUpdateDeckSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDeck {
        onUpdateDeck {
          __typename
          id
          name
          cards {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateDeckSubscription>;

  OnDeleteDeckListener: Observable<OnDeleteDeckSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDeck {
        onDeleteDeck {
          __typename
          id
          name
          cards {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteDeckSubscription>;

  OnCreateCardListener: Observable<OnCreateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard {
        onCreateCard {
          __typename
          id
          question
          answer
          createdAt
          updatedAt
          deck {
            __typename
            id
            name
          }
        }
      }`
    )
  ) as Observable<OnCreateCardSubscription>;

  OnUpdateCardListener: Observable<OnUpdateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCard {
        onUpdateCard {
          __typename
          id
          question
          answer
          createdAt
          updatedAt
          deck {
            __typename
            id
            name
          }
        }
      }`
    )
  ) as Observable<OnUpdateCardSubscription>;

  OnDeleteCardListener: Observable<OnDeleteCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCard {
        onDeleteCard {
          __typename
          id
          question
          answer
          createdAt
          updatedAt
          deck {
            __typename
            id
            name
          }
        }
      }`
    )
  ) as Observable<OnDeleteCardSubscription>;
}
