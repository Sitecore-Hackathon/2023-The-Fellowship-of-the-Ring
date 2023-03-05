# Hackathon Submission Entry form

> **Important**
>
> Copy and paste the content of this file into README.md or face automatic **disqualification**  
> All headlines and subheadlines shall be retained if not noted otherwise.  
> Fill in text in each section as instructed and then delete the existing text, including this blockquote.

## Team name

⟹ The Fellowship of the Ring

## Category

⟹ XM Cloud

## Description

- [Document link](docs/info.pdf 'Hackathon Info')
- [Hackathon Logo](docs/manual.pdf 'Hackathon Manual')

## Video link

⟹ [Video link](https://youtu.be/Wbg1IxN_jwU)
x

## Pre-requisites and Dependencies

- PowerShell 5.1 (or higher)
- Docker 4.10.1 (or higher)
- Node 16.17.0 (or higher)
- Turn on the Hyper-V features

## Installation instructions

1. execute the command .\init.ps1 -InitEnv -LicenseXmlPath "<lic_path>license.xml" -AdminPassword "<some_pwd>"
2. ./up.ps1
3. dotnet sitecore cloud environment list --project-id 6IbyHSkMUd8wrPxmqd44wE
4. dotnet sitecore connect --ref xmcloud --cm hƩps://xmcloudcm.localhost --allow-write true -n local
5. dotnet sitecore ser pull -n "live"
6. dotnet sitecore ser push -n "local"

## Usage instructions

![Hackathon Logo](docs/images/hackathon.png?raw=true 'Hackathon Logo')
