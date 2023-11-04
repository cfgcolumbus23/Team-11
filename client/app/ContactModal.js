"use client";
import React from 'react';
import { Modal } from "antd"

//contact form to send message out

export default function ContactModal({isModalOpen, onOk, onCancel, student}) {
    return (
        <Modal open={isModalOpen} onOk={onOk} onCancel={onCancel}>
            <p>{student.contactFirstName} {student.contactLastName}</p>
            <p><i>{student.relationshipToStudent}</i></p>
            <p>{student.contactNumber}</p>
        </Modal>
    )
}