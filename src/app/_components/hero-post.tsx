import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div>
        <h1>Brent Parrish Responses</h1>
        <ul>
          <li>1
            <ol>Top 5 Favs
              <li>Work with the product team to develop a new feature based on feedback from customers - very satisfiying to bring product change</li>
              <li>Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel - I enjoy building and growing long term relations with clients</li>
              <li>Analyze hundreds of support tickets to spot trends the product team can use - I enjoy analying and finding patterns that can save money/ problems</li>
              <li>Create video tutorials to help teach users a specific feature or use case- as a former coding bootcamp teacher i enjoy teaching tech</li>
              <li>Work with people to figure out if Vercel is suitable for their use case- I enjoy matching clients needs to solutions</li>
            </ol>
            <ol>5 Least Fav, none of them seem that bad though
              <li>
                Help resolve billing issues for customers - nervous about risking billing issues
              </li>
              <li>
                Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites
              </li>
              <li>
                Scheduling time-off coverage and collaborating as part of a growing cohesive support team
              </li>
              <li>
                Write and maintain support articles and docs pages

              </li>
              <li>
                Dig through logs to troubleshoot a customer's broken project

              </li>
            </ol>
          </li>
          <li>2 What do you want to learn or do more of at work?
          Getting back to working in a developer enviroment, tools and project cycle.

          </li>
            <li>3 Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?
              A common issue we run into is having different numbers then Adobe or GA, so sometimes it requiers end to end anaylze of both setups to find discrepancies in either configurations or the way they operate.

            </li>
            <li>4 When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
              Edge Functions: Best for ultra-low latency, geolocation, personalization, and real-time processing.
              Serverless Functions: Ideal for backend logic, database interactions, complex computations, and tasks not requiring low latency.
              Edge Middleware: Suitable for request interception, routing, authentication, and headers modification at the edge.
            </li>
            <li>5 Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?
              Hi [Customer's Name],

              Thank you for reaching out. I'm sorry to hear you're having trouble with your build. To assist you better, could you please provide the following information:

              1. What framework or technology are you using, and what version?
              2. What operating system and version are you working on?
              3. Can you describe the issue you are encountering? Any specific error messages?
              4. What build tool or environment are you using? Can you share your configuration files (e.g., `webpack.config.js`, `package.json`)?
              5. What commands are you running to build your project?
              6. What dependencies or packages are you using, and have there been any recent changes?
              7. Can you provide the full error message or stack trace? Any relevant logs?
              8. Have you tried any troubleshooting steps so far? Did you find any temporary workarounds?
              9. Can you share a snippet of your code or a minimal reproducible example?

              With this information, I’ll be able to get a clearer picture of what might be going wrong and suggest appropriate solutions.

              Best regards,
              Brent

            </li>
            <li>6 The customer from question 5 replies to your response with the below:
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.”
Please write a follow-up reply to the customer.

Hi [Customer's Name],

I’m really sorry to hear about your frustration. I understand how challenging these issues can be, especially after spending so much time on them. I want to help you resolve this as quickly as possible.

To effectively fix the issue, I need a bit more information about your setup and the problem you’re experiencing. This will help me pinpoint the root cause and provide a precise solution. If you could share any error messages or details about the steps you've taken so far, it would be immensely helpful.

In the meantime, here are a few common troubleshooting steps that might help resolve the issue:

Check for Updates: Ensure that all your dependencies, tools, and the framework itself are up to date.
Clear Cache: Sometimes, cached files can cause unexpected issues. Clearing the cache might resolve the problem.
Reinstall Dependencies: Delete your node_modules folder and reinstall the dependencies by running npm install or yarn install.
I’m here to help and I’m confident we can figure this out together. Please provide any details you can, and I’ll do my best to assist you swiftly.

Thank you for your understanding and patience.

Best regards,
Brent
            </li>
  <li>7 - A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.

  Hi thank you for reaching out.
If you're using Vercel with Next.js, you can add a redirect in your next.config.js file:

  {`module.exports = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://example.com',
        permanent: true,
      },
    ]
  },
} `}
  </li>
  <li>8 A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
  Hello,

Thank you for reaching out. If you would like to ensure that your project is not indexed by search engines, you can use the X-Robots-Tag HTTP header set to noindex. This will prevent search engines from indexing your site.

For Vercel Preview Deployments, this header is automatically set to noindex by default. However, if you are using a Custom Domain assigned to a non-Production Branch, the X-Robots-Tag: noindex header will not be set automatically. In such cases, you can manually inject this header using your framework's built-in methods.

For example, in a Next.js application, you can add the following to your next.config.js file:

<code>
`module.exports = {
 `async headers() {
   const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      });
    }
    return headers;
  },
`}
</code>

If you are not using a framework or your framework does not support injecting response headers, you can modify the Header object in your vercel.json file:


{
 ` "headers": [
    {
      "source": "/",
      "has": [
        {
          "type": "host",
          "value": "example.com"
        }
      ],
      "headers": [
        {
          "key": "X-Robots-Tag",
          "value": "noindex"
        }
      ]
    }
  ]`
}
Please note that using your framework's built-in methods to inject headers is always recommended, and doing so through vercel.json should only be used as a last resort.

If you need further assistance, feel free to reach out.

Best regards,

[Your Name]

In making this decision, I considered the need to prevent search engines from indexing the site and provided specific methods to achieve this using the X-Robots-Tag header. I included examples for both Next.js and a general approach using vercel.json to cover different scenarios.

Resources
Preview Deployments Overview

Are Vercel Preview Deployments indexed by search engines?

Technical Guidelines for Migration to Vercel

Metadata Files: robots.txt | Next.js

Telemetry | Turborepo

Using the Directory Listing

Troubleshooting domains

Project Level Roles Reference

Privacy and Compliance

Enhancing Security for Redirects and Rewrites

  </li>

  <li>9 What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?
  One of the common problems customers often ask Vercel for help with is related to Vercel Functions timing out. This can occur due to various reasons such as long-running tasks, inefficient code, or upstream errors.

Short-term Solutions:
Check Function Duration Limits: Ensure that the function duration is within the limits specified for your plan. For example, the default duration for the Hobby plan is 10 seconds, but it can be configured up to 60 seconds. For the Pro plan, it is 15 seconds by default, configurable up to 300 seconds. For Enterprise, it is 15 seconds by default, configurable up to 900 seconds. You can configure these settings as needed.

Optimize Code: Review and optimize your code to ensure it runs efficiently. Avoid long-running tasks within the function and ensure that any API or database requests are responding within the defined max duration limits.

Return HTTP Responses: Make sure your function returns an HTTP response, even if it is an error. This prevents the function from timing out due to a lack of response.

Check for Infinite Loops: Ensure that your function does not contain any infinite loops that could cause it to run indefinitely.

Handle Upstream Errors: If your function depends on third-party APIs or databases, ensure that there are no errors upstream. Make sure all necessary environment variables are set correctly for successful communication with third-party services.

Long-term Solutions:
Implement a Support Plan or SLA: For businesses with production-critical workloads or time-sensitive deployments, implementing a support plan or SLA can provide specific turnaround times for receiving responses from Vercel Support. This ensures that any issues are addressed promptly.

Regular Code Reviews and Optimization: Conduct regular code reviews and optimization sessions to ensure that your functions are running efficiently. This can help identify potential issues before they become critical.

Monitoring and Logging: Utilize Vercel's runtime logs and monitoring tools to keep track of your functions' performance. This can help you identify and address issues proactively.

Documentation and Training: Ensure that your development team is well-versed with Vercel's documentation and best practices. Providing training sessions can help your team understand how to optimize functions and handle common issues effectively.

By addressing both short-term and long-term solutions, you can help customers overcome common problems with Vercel Functions and ensure a smoother experience on the platform.
  </li>

  <li>10 How could we improve or alter this familiarisation exercise?
I enjoyed it and don't think you need to improve it.

  </li>

        </ul>

      </div>


    </section>
  );
}
