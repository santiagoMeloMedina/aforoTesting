from selenium.webdriver import Chrome

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException


import csv

driver = Chrome()
driver.get("http://localhost:3000/create-account")


inputs = driver.find_elements_by_tag_name('input')
buttons = driver.find_elements_by_tag_name('button')
selectOptions = driver.find_elements_by_tag_name('select')

username,password,neighborhood,name,lastname,age,housemates = inputs[0],inputs[1],inputs[2],inputs[3],inputs[4],inputs[5],inputs[6]
selectCity,selectType,selectOccupation = Select(selectOptions[0]),Select(selectOptions[1]),Select(selectOptions[2])
createAccount = buttons[0]

with open('dataCitizenRegister.csv') as csv_file:
    csv_reader,i = csv.reader(csv_file, delimiter=';'),1
    for row in csv_reader:
        username.send_keys(row[0])
        password.send_keys(row[1])
        name.send_keys(row[2])
        lastname.send_keys(row[3])

        if(len(row[4]) > 0):
            selectCity.select_by_visible_text(row[4])
        
        age.send_keys(row[5])
        
        neighborhood.send_keys(row[6])

        housemates.send_keys(row[7])
        if(len(row[8])>0):
            selectOccupation.select_by_visible_text(row[8])
        selectType.select_by_visible_text('Ciudadano') #todos son de tipo ciudadano
        expectedResult = row[9]

        createAccount.click()
        messages = []
        try:
            WebDriverWait(driver, 3).until(EC.alert_is_present(),
                                        'Timed out waiting for PA creation ' +
                                        'confirmation popup to appear.')

            alert = driver.switch_to.alert
            messages = alert.text.split('•')
            messages = [message.strip() for message in messages]
            alert.accept()
            #print("alert accepted")
        except TimeoutException:
            print("no alert")
        if i > 1:print("Test {0} {1}".format(i-1,"passed" if expectedResult in messages else "wrong"))

        driver.refresh()
        driver.get("http://localhost:3000/create-account")
        inputs = driver.find_elements_by_tag_name('input')
        buttons = driver.find_elements_by_tag_name('button')
        selectOptions = driver.find_elements_by_tag_name('select')

        username,password,neighborhood,name,lastname,age,housemates = inputs[0],inputs[1],inputs[2],inputs[3],inputs[4],inputs[5],inputs[6]
        selectCity,selectType,selectOccupation = Select(selectOptions[0]),Select(selectOptions[1]),Select(selectOptions[2])
        createAccount = buttons[0]

        i += 1