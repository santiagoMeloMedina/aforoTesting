
### Backend aforo
This is the backend service for the [frontend nextjs project](https://github.com/santiagoMeloMedina/aforoTesting/tree/dev/frontend) in this aforoTesting repository.

#### Install configuration
For development we will be using `pipenv`. These are the steps for it.
1. Install pipenv ([Here's some instructions](https://pypi.org/project/pipenv/))
2. On the backend root folder use below command to get into virtual environment
    ```
        pipenv shell
    ```
3. Use following commands to install main packages and dev packages
    ```
        pipenv install
    ```
    ```
        pipenv install --dev
    ```


#### Run configuration
Before running this sevice, **you must set the aforoDB mysql service** and the following environmental variables. (Information below for default environmental variables)

> __DB_HOST__ &#8594; DB ip
> __DB_PORT__ &#8594; Self-explanatory
> __DB_PASS__ &#8594; Self-explanatory
> __DB_USER__ &#8594; User to login on database, will not be root
> __DB_NAME__ &#8594; Name of database


##### Default values
These values will be used by the system in case environamental variables are not set
> __DB_HOST__ &#8594; "0.0.0.0"
> __DB_PORT__ &#8594; "4000"
> __DB_PASS__ &#8594; "123"
> __DB_USER__ &#8594; "root"
> __DB_NAME__ &#8594; "aforo"

After all of this you can run 
    ```
        python3 main.py
    ```

### 🎉
