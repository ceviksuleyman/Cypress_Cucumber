Feature: Login Manager Passwords
    Scenario: Manager_Id1
        Given visit to url
        When login using data
            | username | password  |
            | Manager  | Manager1! |
        And verify login


    Scenario: Manager_Id2
        Given visit to url
        When login using data
            | username | password  |
            | Manager2 | Manager2! |
        And verify login