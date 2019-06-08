## Jenkins Setup

In this tutorial we are going to set tu Jenkins in a locally and everytime we push a project, it should automatically build.

1. Download Java 8
   Jenkins runs using Java, so we need it go to the following link: https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
   In my case I am using MACOS, so i'll download the jdk-8u211-macosx-x64.dmg version.

2. Download Jenkins LTS
   Now go to the following link: https://jenkins.io/download/, I would recommend downloading the long term support version for your opperating system. Again,
   in my case we are using MacOS, so I'll choose that option.

Once it donwloaded, Jenkins should automatically open in port 8080. If it doenst open, there a possibility that Java wasn't installed correctly.

3.  Unlocking Jenkins

    3.1. I will ask for a password to unlock it. To do this, go to the path mentioned in your files 'Users/Shared/Jenkins/Home'.

    3.2 Once there, you should see a secrets folder. To unlock it, right click on the folder and and select 'Get info'. A window will pop up and in the last tab 'Sharing Permissions' you will need to add yourself. At the bottom right corner of the window, click in the lock and select the users you want to add. It will ask for your credentials, just enter them.

    3.3 Now you should have the secrets folder unlocked, now open the initialAdminPassword file. If it's locked, repeat step 3.2. Then copy and paste the password into the
    Jenkins interface. Now you have Jenkins ready to work.

4.  Jenkins Github plugin
    In this example we are going to be using github as source repository. We need to install a plugin for this to work.

    4.1. Click on 'Manage Jenkins' in the left side bar, go to the 'Available' tab and in the search bar type 'Github'.

    4.2. Look for the 'Github Integration Plugin' and click on the 'donwload now and install after restart'. this will take you to another window, scroll at the bottom and
    click on the 'Restart Jenkins when installation is complete and no other jobs are running'.

5.  Creating a Jenkins job.
    Once Jenkins has restarted:

    5.1 In you interface, on the left side bar, click on New Item.

    5.2 Give it a name and select Freestyle project option. Click on the ok button.

    5.3 In General tab, click the 'Github project' checkbox and copy and paste the URL.

    5.4 In Souce code management, click on 'Git', and give it the Repository URL, this is the one that appears when you click on the gree clone button. Since our repo is public, we dont need to add any credentials, we can also add extra branches for Jenkins to build but in this tutorial we are only going to use master.

    5.5 In Build triggers, click on the 'Github Hook trigger GITScm polling', this is the plugin we installed in step 4 and it allows Jenkins to build everytime we push changes to our project.

    5.6 Click on the save button, now we have a Jenkins job configured.

6.  Ngrok
    Because we are running locally, everytime we are commiting and pushing changes we need a way to notify Jenkins about it, so we are going to set a Webhook on Github. But since it will ask us for a URL, we cannot give it our localhost or private URL. Here's where Ngrok comes in, this will expose our port 8080.

    6.1 Go to this link and follow the instructions until you get your token (step 3): https://ngrok.com/download

    6.2 Assuming that you already donwloaded it, unziped it, got your token, run the following command in your terminal: ./ngrok http 8080. This will give us an URL to work with. It should look like: http://3b2db437.ngrok.io

7.  Setting up our Github Webhook
    7.1 In your project repository, go to the settings, click on Web Hooks and click on Add WebHook

    7.2 Put the URL that Ngrok provided to you and add /github-webhook/ to it so if your URL is: http://3b2db437.ngrok.io, you should write http://3b2db437.ngrok.io/github-webhook/

    7.3 In Content type, select application/json and then select Just push event checkbox.

    7.4 Make sure the Active checkbox is checked.

    7.5 Finally click on Update Webhook.

Now everytime you make a change and push it to your repo, Jenkins will build it.
