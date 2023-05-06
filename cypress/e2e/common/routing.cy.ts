import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на глоавную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('переход на страницу профиля пользователя', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Пользователь отркрывает несуществующий маршрут', () => {
            cy.visit('/akdl');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
});
describe('Пользователь авторизовае', () => {
    beforeEach(() => {
        cy.login();
    });
    it('переход на страницу профиля пользователя', () => {
        cy.visit('/profile/1');
        cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Переход на глоавную статей', () => {
        cy.visit('/articles');
        cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
});
