"use client";
import { ConfigProvider } from 'antd'
import es from 'antd/locale/en_US'
import dayjs from 'dayjs'
import 'dayjs/locale/es-us'
dayjs.locale('es-us')
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from 'antd/es/layout/layout';
import { Header } from 'antd/es/layout/layout';
import { Content } from 'antd/es/layout/layout';
import { Menu } from 'antd';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })
const links = ["home", "assessment", "contact", "recommendations", "students"];
const items = links.map((val, i) => ({
  "key": i + 1,
  "label": <Link href={val === "home" ? "/" : val}>{val}</Link>
}));
export default function RootLayout({ children }) {
  return (
    <ConfigProvider locale={es}>
      <html lang="en">
        <body className={inter.className}>
          <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Menu
            defaultSelectedKeys={['2']}
            theme="dark"
            mode="horizontal"
            items={items}
            />
            </Header>
            <Content style={{padding: '0 50px'}}>
              {children}
            </Content>
          </Layout>
        </body>
      </html>
    </ConfigProvider>
  )
}
