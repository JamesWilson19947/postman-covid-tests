# Postman Covid Testing

These sets of tests were designed to grab an API url from apify.com and then process the tests to ensure.

That for the date time 22nd March 2020 at 22:05 the following conditions are met:
- totalInfected = 5683
- dailyConfirmed >700
- England >4000
 
I have installed Postman/Newman in Docker and launched the tests to verify the results. The docker instance will return a error code 1 if it fails.

If you'd like to see the Javascript file for the tests, I commited it seperatley so its easy to see : [test.js](https://github.com/JamesWilson19947/postman-covid-tests/blob/main/test.js)

### How to run these tests locally
1. Clone this repo
2. CD to the directory
3. docker-compose up

## Automated Testing
I have added a [docker-image.yml](https://github.com/JamesWilson19947/postman-covid-tests/blob/main/.github/workflows/docker-image.yml) which will trigger a Github Actions workflow to build the image and it will output the result. This happens anytime a pull request or push is made. It will return a success even if the tests fails and the test is to prove the docker image works, but the docker image does exit with a code of 1. 

An image of these tests running:
![image](https://user-images.githubusercontent.com/15872012/139706351-69117bbf-a037-43af-913c-560a9c0fbdf6.png)

An image of the tests running in Postman:
![image](https://user-images.githubusercontent.com/15872012/139706437-9531016b-b965-4b1f-acff-cc1b3106cd0f.png)


