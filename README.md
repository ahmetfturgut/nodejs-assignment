 
Project `src` structure directories.

```
src/
├─ config/
│  ├─ config.js
├─ controller.js
│  ├─ controller.index.js
│  ├─ recordController.js
├─ loader/
│  ├─ express.js
│  ├─ mongoose.js
│  ├─ server.js
├─ middlewares/
│  ├─ apiResponse.js
│  ├─ middlewares.index.js
│  ├─ validator.js
├─ model/ 
│  ├─ record.js 
├─ repository/ 
│  ├─ recordRepository.js 
│  ├─ repository.index.js
├─ routes/
│  ├─ routes.index.js
│  ├─ routes.js
│  ├─ recordRoute.js
├─ service/
│  ├─ recordService.js
│  ├─ service.index.js
├─ utils/
│  ├─ pick.js
│  ├─ requestUtil.js
│  ├─ utils.index.js
├─ validations/
│  ├─ validations.index.js
│  ├─ record.validation.js
test/
├─ test.js
└─integtarion
    └─ recordController.test.js
└─utils
    └─ setupTestDBAndConnection.js
```



### Installation

Clone the repo:

```bash
git clone https://github.com/ahmetfturgut/nodejs-assignment.git
cd nodejs-assignment
```

Install the dependencies:

```bash
npm install
```


## Commands

### Running locally:

```bash
npm run start
```
 
### Test

```bash
# run all tests with Mocha
npm run test
 
```



