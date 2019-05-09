import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time, random

# robot framework

class BlogTest(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(BlogTest, self).__init__(*args, **kwargs)
        self.driver = webdriver.Chrome()
        
    def tearDown(self):
        self.driver.close()
        print("tear down finished")

    # methods need to start with "test_"
    def test_websiteLoads(self):
        self.driver.get("http://localhost:3000/")
        self.assertEqual(self.driver.title, "My Blog")

    def test_submitPost(self):
        self.driver.get("http://localhost:3000/")
        title = self.driver.find_element_by_name('title')
        titleText = self.generate_text(5)
        print(f"title: {titleText}")
        title.send_keys(titleText)
        body = self.driver.find_element_by_name('body')
        bodyText = self.generate_text(20)
        print(f"Body: {bodyText}")
        body.send_keys(bodyText)
        time.sleep(2)
        submit = self.driver.find_element_by_name("submitPost")
        submit.click()

        time.sleep(5)
        tableRows = self.driver.find_element_by_class_name("table").find_elements(By.TAG_NAME, "tr")
        cols = tableRows[-1].find_elements(By.TAG_NAME, "td")
        self.assertEqual(cols[0].text, titleText, msg=None)
        self.assertEqual(cols[1].text, bodyText, msg=None)

    def generate_text(self, numWords):
        with open("shel.txt") as f:
            words = f.read()
        words = words.split()
        start = random.randint(1,len(words) - numWords)
        return ' '.join(words[start:start+numWords])

    def chaseCalmSignin(self):
        self.driver.get("https://www.calm.com/")


if __name__ == "__main__":
    unittest.main()

