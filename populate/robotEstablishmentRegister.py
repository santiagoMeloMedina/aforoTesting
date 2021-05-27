from selenium.webdriver import Chrome

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

import csv
import time

driver = Chrome()

driver.get("http://localhost:3000/create-account")



selectOptions = driver.find_elements_by_tag_name('select')


selectCity,selectType,selectCategory = Select(selectOptions[0]),Select(selectOptions[1]),Select(selectOptions[2])


selectType.select_by_visible_text('Establecimiento') #todos son de tipo establecimiento

##########################################################
#time.sleep(3)
inputs = driver.find_elements_by_tag_name('input')

buttons = driver.find_elements_by_tag_name('button')
selectOptions = driver.find_elements_by_tag_name('select')




username,password,neighborhood,name,capacity = inputs[0],inputs[1],inputs[2],inputs[3],inputs[4]
selectCity,selectType,selectCategory = Select(selectOptions[0]),Select(selectOptions[1]),Select(selectOptions[2])


createAccount = buttons[0]

"""

username.send_keys('cc')
password.send_keys('Aa')
name.send_keys('Aa')
neighborhood.send_keys('ingenio')
capacity.send_keys('1.5')

selectCity.select_by_visible_text('Cali')
selectCategory.select_by_visible_text('cine')

createAccount.click()

messages = []
try:
    WebDriverWait(driver, 3).until(EC.alert_is_present(),
                                'Timed out waiting for PA creation ' +
                                'confirmation popup to appear.')

    alert = driver.switch_to.alert
    messages = alert.text.split('•')
    messages = [message.strip() for message in messages]
    #alert.accept()
    #print("alert accepted")
except TimeoutException:
    print("no alert")
print(messages)

"""
with open('dataEstablishmentRegister.csv') as csv_file:
    csv_reader,i = csv.reader(csv_file, delimiter=';'),1
    for row in csv_reader:
        username.send_keys(row[0])
        password.send_keys(row[1])
        name.send_keys(row[2])
        if(len(row[3]) > 0):
            selectCity.select_by_visible_text('Cali')
        
        neighborhood.send_keys(row[4])

        if(len(row[5]) > 0):
            selectCategory.select_by_visible_text('cine')
        capacity.send_keys(row[6])
        expectedResult = row[7]

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
        print(messages)
        if i > 1:print("Test {0} {1}".format(i-1,"passed" if expectedResult in messages else "wrong"))

        driver.refresh()
        driver.get("http://localhost:3000/create-account")
        
        selectOptions = driver.find_elements_by_tag_name('select')


        selectCity,selectType,selectCategory = Select(selectOptions[0]),Select(selectOptions[1]),Select(selectOptions[2])


        selectType.select_by_visible_text('Establecimiento') #todos son de tipo establecimiento

        ##########################################################
        #time.sleep(3)
        inputs = driver.find_elements_by_tag_name('input')

        buttons = driver.find_elements_by_tag_name('button')
        selectOptions = driver.find_elements_by_tag_name('select')

        username,password,neighborhood,name,capacity = inputs[0],inputs[1],inputs[2],inputs[3],inputs[4]
        selectCity,selectType,selectCategory = Select(selectOptions[0]),Select(selectOptions[1]),Select(selectOptions[2])


        createAccount = buttons[0]



        i += 1
