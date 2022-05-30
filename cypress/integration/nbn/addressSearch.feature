Feature: NBN Address Search
I can perform NBN address search from Belong Website


Scenario Outline: NBN Address Search
    Given I am on the Belong homepage
     When I click the button "See internet plans"
     Then I can see the Belong website for internet plans
     Then I click the button "Check your address"
     Then I can see the page for NBN Address Search
     Then I input the given address "<Address>"
     Then I select the first matched address result
     Then I click the button "Check address"
     Then I can see the NBN search address result as "<Technology>"


    Examples: 
      | Address                               | Technology |
      | 3/9 Blair Street, Bentleigh, VIC      | FTTC       |
      | 3a Maude Avenue, Doncaster East, VIC  | HFC        |
      | 6 Gaffin Way, Kwinana Town Centre, WA | FTTP       |
      | 25 Commercial Rd, Hyde Park, SA       | FTTN       |

