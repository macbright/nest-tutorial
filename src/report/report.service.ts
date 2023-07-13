import { Injectable } from "@nestjs/common";
import { ReportType, data } from "../data";
import { v4  as uuid} from "uuid"
import { ReportResponseDto } from "../dtos/report.dto";

interface Report {
   amount: number, source: string
}

interface UpdateReport {
  amount?: number, source?: string
}


@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponseDto[]  {
    return data.report
    .filter((report) => report.type === type)
    .map((report) => new ReportResponseDto(report));
  }

  getReportById(id: string, reportType: ReportType ) : ReportResponseDto {
    const report = data.report
    .filter((report) => report.type === reportType)
    .find((report) => report.id === id)

    if(!report) return;
    
    return new ReportResponseDto(report)
  }

  createReport(type: ReportType, {amount, source}: Report): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source: source,
      amount: amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type == "income" ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport)

    return new ReportResponseDto(newReport);
  }

  updateReport(type: ReportType, id: string, body: UpdateReport): ReportResponseDto {
   
    const singleReport = data.report
    .filter((report) => report.type === type)
    .find((report) => report.id === id)

    if(!singleReport) return;

    const reportIndex = data.report
    .findIndex((report) => report.id ===  singleReport.id)
    
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date()
    }
    return new ReportResponseDto(data.report[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.report
    .findIndex((report) => report.id === id)

    if(reportIndex === -1) return;

    data.report.splice(reportIndex, 1)
    return;
  }
}