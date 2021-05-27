from selenium.webdriver import Chrome

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

import csv
import time

driver = Chrome()

driver.get("http://localhost:3000/")


inputs = driver.find_elements_by_tag_name('input')
buttons = driver.find_elements_by_tag_name('button')

username,password = inputs[0],inputs[1]
login = buttons[0]

username.send_keys('adminEst') #Establecimiento con capacidad maxima 2
password.send_keys('Est')

login.click()


#Entry/Exit page
driver.refresh()
driver.get("http://localhost:3000/dashboard/entry")

inputs = driver.find_elements_by_tag_name('input')
buttons = driver.find_elements_by_tag_name('button')


username = inputs[2]
register = buttons[2]

#username.send_keys('admin1')
#register.click()


with open('dataRegisterExit.csv') as csv_file:
    csv_reader,i = csv.reader(csv_file, delimiter=';'),1
    for row in csv_reader:
        username.send_keys(row[0])
        expectedResult = row[1]
        register.click()
        messages = ""
        try:
            WebDriverWait(driver, 3).until(EC.alert_is_present(),
                                        'Timed out waiting for PA creation ' +
                                        'confirmation popup to appear.')

            alert = driver.switch_to.alert
            messages = alert.text
            alert.accept()
            #print("alert accepted")
        except TimeoutException:
            print("no alert")
        print("Test {0} {1}".format(i,"passed" if expectedResult == messages else "wrong"))

        driver.refresh()
        driver.get("http://localhost:3000/dashboard/entry")

        inputs = driver.find_elements_by_tag_name('input')
        buttons = driver.find_elements_by_tag_name('button')

        username = inputs[2]
        register = buttons[2]

        i += 1





