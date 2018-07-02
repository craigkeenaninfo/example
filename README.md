# AWS Serverless Static Website Architecture #
AWS Serverless Static Website example to demo Cloud Portfolio


## Prerequisites ##

1. A personal computer, and Internet access
2. An email account 
3. An Amazon Web Services Account
4. A Amazon Web Services Route53 Domain (Note: This is not part of FREE tier services)

    or

    A registered domain with a 3rd Party (ex. GoDaddy.com)
    
5. A GitHub Account, and Repostory
6. Configure GitHub Access
    - Generate SSH Key and Add to SSH Agent (https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
    - Create Personal Access Token for the CLI (https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
7. Download CloudFormation YML Template 'serverless_static_webite.yml' from this repository.

        git clone https://github.com/craigkeenaninfo/example.git

    Hint: If your unfamiliar with Git, see the 'Setup and Configure Developer's Desktop Environment' section below


# How to run AWS CloudFormation Infrastructure-as-Code(IAC) Template #
Before attempting these procedures, you must meet all the Prerequisites

1. Log in to the AWS Management Console and select CloudFormation in the Services menu.
2. Create a new stack by using one of the following options:
    - Click Create Stack. This is the only option if you have a currently running stack.
    - Click Create New Stack in the CloudFormation Stacks main window. This option is visible only if you have no running stacks.
3. On the Select Template page, choose a stack template by using the following options:
    - Upload a template to Amazon S3.

    Select an AWS CloudFormation template on your local computer. Choose Choose File to select the template file that you want to upload. 

4. To accept your settings, choose Next, and proceed with specifying the stack name and parameters.
5. On the Specify Details page, type a stack name in the Stack name box.

    In the Parameters section, specify parameters that are defined in the stack template.

    The following parameters are required:

    - Email Address (ex. example@gmail.com)
    - Domain Name (ex. example.com)
    - Website Name (ex. example.com)
    - GitHub Repository (ex. portfolio)
    - GitHub Repository Branch (ex. master)
    - GitHub Repository Location (ex. https://github.com/example/portfolio.git)
    - GitHub Owner (ex. example@gmail.com)
    - GitHub Personal Access Token / OAuthToken (Hint: completed during pre-requisites )
    - Application Id (Hint: Unique short name for website like 'web')

6. When you are satisfied with the parameter values, click Next to proceed with setting options for your stack.
7. On the Options screen of the Create Stack wizard, click Next Step to proceed with reviewing your stack.
8. On the Review page, review the proposed configuration.

    Select I acknowledge that this template may create IAM resources to acknowledge that AWS CloudFormation might create IAM resources.
9. When you finish, choose Create.

    Your stack appears in the list of AWS CloudFormation stacks, with a status of CREATE_IN_PROGRESS.

    While your stack is being created (or afterward), you can use the stack detail pane to view your stack's events, data, or resources. 

    After your stack has been successfully created, its status changes to CREATE_COMPLETE. You can then select it (if necessary) and click the Outputs tab to view your stack's outputs if you have defined any in the template.


# Setup and Configure Developer's Desktop Environment #
Please note it is beyond the scope of this procedure to teach how to develop applications. We can, however, identify the tools used for this example.

Please note that the commands shown are for linux/MacOS machines, but windows is supported. 
A developer running Windows will have to do independent research to identify Windows procedures and syntax

1. Launch a Terminal Window
2. Install Developer Software and Tools

    - Homebrew 

            /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    - Git

            brew install git
    
    - AWS Command Line Interface (CLI)

            brew install awscli
	
        Edit .bash_profile
	
            PATH=$PATH:/usr/local/bin

    - Python

            brew install python

    - Boto3

            pip install boto3
    
    - iPython

            sudo -H pip install ipython

    - Atom

            brew cask install atom



3. Create a working directory (ex. /Users/example/projects/portfolio)

        mkdir projects/portfolio
        cd projects/portfolio
        
3. Install Library and Package Managemnt Software

    - npm

            npm init
    
        Provide the following:
    
            package name: (portfolio) 
            version: (1.0.0) 
            description: Cloud Portfolio
            entry point: (webpack.config.js) index.js
            test command: 
            git repository: (https://github.com/example/portfolio.git) 
            keywords: 
            author: example@gmail.com
            license: (ISC) 

    - local web server

            npm install -g local-web-server

    - React & ReactDOM

            npm install --save react react-dom

    - Webpack

            npm install --sav-dev webpack webpack-cli
    
    - 

4. Configure Git / Git Commands

    Change to working directory (ex. /Users/example/projects/portfolio))

        cd /Users/example/projects/portfolio
    
    Configure Global Settings

        git config --global user.name "First Lastname"
	    git config --global user.email example@gmail.com

    Clone Remote Repository to local copy on PC

        git clone https://github.com/craigkeenaninfo/example.git

    Configure Remote Origin

        git remote add origin git@github.com:example/example.git
        git remote set-url origin git@github.com:example/example.git

	Note: Requires ssh key setup for ssh push/pull
    
    Edit / Update replacing example values with your application details

        atom <filename>
    
    Hint: replace <filename> with name of file you wish to edit

    Check Status
    
        git status

	Add / Stage updated File

        git add <filename>

    Hint: replace <filename> with name of file you have edited

    Commit

	    git commit -m "First Commit"

    Push local copy to Remote repository 
	
        git push
	
    Note: If prompted, provide username/password


5. Package application using webpack

        npm run webpack

6. Unit test Reactjs code using Jest

        npm run test

7. Update / Push to GitHub

    Make any required changes

    Push to GitHub

            git add 
            git commit -m "Latest Commit"
            git push
	
    Note: If prompted, provide username/password


# Known Issues #
## You do NOT wish to purchase a AWS Route53 Domain at this time, or you already have a domain with another provider ##

If you do NOT have an AWS Route53 Domain, and do NOT wish to purchase a domain at this time, you may still test the CloudFormation template 'serverless-static-webite.yml'. 

***Note:*** You will not be able to browse your site using the Route53 Alias, but you can browse the CloudFront URL

***To run without a registered domain***
1. Using the 'How to run CloudFormation IAC' procedures, create a stack using the 'account_setup.poc.yml' template.

    Provide required paramaters, and execute
2. Once Account Setup template has complete successfully, the required AWS Route53 Hosted Zone will be created.


## You have a registered domain with Privacy Protection Enabled, and are not receving the emails during AWS Certificate creation in the template ##
Unfortunately, CloudFormation currently supports email validation, while the command line interface (CLI) supports both email and DNS Validation.


***To create the certificate using the AWS CLI***
1. Using the 'How to run CloudFormation IAC' procedures, create a stack using the 'account_setup.poc.yml' template.

    Provide required paramaters, and execute

2. Once Account Setup template has complete successfully, obtain your security credentials and HostedZoneId from the CloudFormation Stack outputs

3. Configure the AWS CLI on your desktop

        aws configure
    
    Provide the AccessKey and SecretAccessKey
4. Request a Certifcate

        aws acm request-certificate --domain-name *.<value> --validation-method DNS

    Example.

            aws acm request-certificate --domain-name *.example.info --validation-method DNS

    Returns.

        {
            "CertificateArn": "arn:aws:acm:<region>:<aws_account_id>:certificate/<certificate_id>"
        }

    Note: Log in to the AWS Management Console and select Certificate Manager in the Services menu. Obtain the CNAME Name and Value from either the Status - Domain section, or by selecting the 'Export DNS configuration to a file' link. 

5. To validate certificate using DNS Validation 

    - Create a file in your working directory with the following:

            {
                "Comment": "ACM Record Set",
                "Changes": [
                {
                    "Action": "CREATE",
                    "ResourceRecordSet": {
                    "Name": "_abc123d456ef78g9012345678901h1i2.example.info.",
                    "Type": "CNAME",
                    "TTL": 900,
                    "ResourceRecords": [
                        {
                        "Value": "_abc1de23fg45hi6j789kl0m12n345o67.acm-validations.aws."
                        }
                    ]
                    }
                }
                ]
            }

        Note: Replace Name and Value values with values obtained from AWS Certificate Manager Console

    - Run the following command

            aws route53 change-resource-record-sets --hosted-zone-id <value> --change-batch file://change-resource-record-sets.json

        Example.

            aws route53 change-resource-record-sets --hosted-zone-id ABC1DEF2GH3I4 --change-batch file://change-resource-record-sets.json
    
        Returns.

                {
                    "ChangeInfo": {
                        "Id": "/change/C2GU6PPUC70KHF",
                        "Status": "PENDING",
                        "SubmittedAt": "2018-03-19T11:49:32.087Z",
                        "Comment": "ACM Record Set"
                    }
                }
        
    - Obtain the Certificate Arn

            aws acm list-certificates

        Note: Record the Certificate Arn
6. Using the 'How to run CloudFormation IAC' procedures, create a stack using the 'serverless_static_website.poc.yml' template.

    Provide required paramaters, and execute

## Repository Status ##
Initial Deploy